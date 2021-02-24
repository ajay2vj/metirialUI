import React, { Component } from "react";

import { Subheader, GridList, GridTile } from 'material-ui';
import ToggleStar from './components/ToggleStar';
import withWidth from 'material-ui/utils/withWidth';

const tilesData = [
  {
    id: 1,
    img: 'https://www.thespruceeats.com/thmb/-PRqKVOQOLYYIYFuqLj_WWhf0Z0=/1280x960/filters:fill(auto,1)/eggpizzas5-568e859a3df78ccc1574b6be-5b2a7b38a474be00377ecb70.jpg',
    title: 'Breakfast',
    author: 'காலை உனவு',
  },
  {
    id: 2,
    img: 'https://www.esquireme.com/public/styles/full_img/public/images/2016/08/25/Burger.jpg?itok=Xn6lhEVf',
    title: 'Tasty burger',
    author: 'மதிய உனவு',
  },
  {
    id: 3,
    img: '../assets/images/01.jpg',
    title: 'Camera',
    author: 'இரவு உனவு',
  },
  {
    id: 4,
    img: '../assets/images/02.jpeg',
    title: 'Morning',
    author: 'காலை உனவு',
  },
  {
    id: 5,
    img: '../assets/images/03.jpg',
    title: 'Hats',
    author: 'இரவு உனவு',
  },
  {
    id: 6,
    img: '../assets/images/04.jpg',
    title: 'Honey',
    author: 'மதிய உனவு',
  },
  {
    id: 7,
    img: '../assets/images/05.jpg',
    title: 'Vegetables',
    author: 'இரவு உனவு',
  },
  {
    id: 8,
    img: '../assets/images/06.jpg',
    title: 'Water plant',
    author: 'காலை உனவு',
  },
];

class MeetingLayout extends Component {
  render() {
    return (
      <GridList cols={this.props.width} padding={1}>
        <Subheader>December</Subheader>
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={
              <ToggleStar />
            }
          >
            <img src={tile.img} alt={tile.title} />
          </GridTile>
        ))}
      </GridList>
    )
  }
}

export default withWidth()(MeetingLayout);

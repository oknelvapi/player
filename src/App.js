import React, { Component } from 'react';


import PlayList from './play-list.controller';
import View from './play-list.view';

export default class App extends Component {
  

  render() {

    const { Wrapper, Main, Header } = View;

    return (
      <Wrapper>
        <Main>
          <Header>
            <button type='button'>Playlist</button>
            <button type='button'>Radio</button>
          </Header>
          <PlayList />           
        </Main>
      </Wrapper>
      
    );
  };
};

import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Page from './page';

const Header = styled.h1`
  font-family: peace_sansregular;
  font-size: 48px;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 25px;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(236, 171, 164)',
      dark: 'rgb(236, 171, 164)',
    },
    text: {
      primary: 'rgb(236, 171, 164)',
    },
  },
});

export default class Intro extends React.Component {
  render() {
    return (
      <Page>
        <Header>
          You’re Ready For Vacation.<br />But Is Your Inbox?
        </Header>
        <p>
          Whether you're going on a tropical trip or signing off for a
          staycation, you have to write an out of office message. So, why not
          write a good one? Saying you have "limited access to Wifi" isn't
          fooling anyone. It's 2018, after all.
        </p>
        <p>
          Share quick details about your time away and the generator will give
          you an 'OOO' email that's as fun as your vacation. (Well, almost.)
        </p>
        <MuiThemeProvider theme={theme}>
          <form>
            <Flex justify="center">
              <Box px={3} pt={4} width={1 / 3}>
                <TextField
                  style={{ width: '100%' }}
                  required
                  label="First name"
                  id="first"
                  name="first"
                />
              </Box>
              <Box px={3} pt={4} width={1 / 3}>
                <TextField
                  style={{ width: '100%' }}
                  required
                  label="Last name"
                  id="last"
                  name="last"
                />
              </Box>
            </Flex>
          </form>
        </MuiThemeProvider>
      </Page>
    );
  }
}

import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Container, Header, Content, Text, List, ListItem, Body, Title, Icon, Card, CardItem, Right } from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AboutScreenStyle';

class AboutScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body style={{ alignItems: 'center' }}>
            <Title style={{ fontWeight: 'bold' }}>About RNWeather</Title>
          </Body>
        </Header>
        <Content padder>
          <List>
            <ListItem>
              <Text style={{ fontWeight: 'bold' }}>Made by:</Text><Text> David Wu</Text>
            </ListItem>
            <ListItem>
              <Text style={{ fontWeight: 'bold' }}>React Native Version:</Text><Text> 0.50.4</Text>
            </ListItem>
            <Card style={{ marginLeft: 20, marginTop: 20 }}>
              <CardItem header>
                <Text>Connect with me on:</Text>
              </CardItem>
              <CardItem>
                <Icon active name="logo-chrome" />
                <Text>Website   </Text>
                <Right>
                  <Icon
                    name="arrow-forward"
                    onPress={() => Linking.openURL('http://david-wu.me').catch(err => console.error('An error occurred', err))}
                  />
                </Right>
              </CardItem>
              <CardItem>
                <Icon active name="logo-github" />
                <Text>Github    </Text>
                <Right>
                  <Icon
                    name="arrow-forward"
                    onPress={() => Linking.openURL('https://github.com/Pl4gue').catch(err => console.error('An error occurred', err))}
                  />
                </Right>
              </CardItem>
              <CardItem>
                <Icon active name="logo-linkedin" />
                <Text>LinkedIn</Text>
                <Right>
                  <Icon
                    name="arrow-forward"
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/felix-wu-de/').catch(err => console.error('An error occurred', err))}
                  />
                </Right>
              </CardItem>
              <CardItem>
                <Icon active name="logo-twitter" />
                <Text>Twitter </Text>
                <Right>
                  <Icon
                    name="arrow-forward"
                    onPress={() => Linking.openURL('https://twitter.com/pl4gue_dwu').catch(err => console.error('An error occurred', err))}
                  />
                </Right>
              </CardItem>
            </Card>
          </List>
        </Content>
      </Container>
    );
  }
}

export default AboutScreen;

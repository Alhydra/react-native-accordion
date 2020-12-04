import React from 'react';
import { AppLoading } from 'expo';
import { Accordion, Text, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      expended: 0,
      data: [
        {
          id:1,
          month: 'January',
          expenses: [
            {
              name: 'Rent',
              value: 500,
              
            },
            {
              name: 'Food',
              value: 230,
            },
            {
              name: 'Gas',
              value: 57,
            },
            {
              name: 'Car',
              value: 0,
            },
            {
              name: 'Savings',
              value: 717
            }
          ]
        },
        {
          id:2,
          month: 'February',
          expenses: [
            {
              name: 'Rent',
              value: 500,
              
            },
            {
              name: 'Food',
              value: 200,
            },
            {
              name: 'Gas',
              value: 49,
            },
            {
              name: 'Car',
              value: 29,
            },
            {
              name: 'Savings',
              value: 870
            }
          ]
        },
        {
          id:3,
          month: 'Mars',
          expenses: [
            {
              name: 'Rent',
              value: 500,
              
            },
            {
              name: 'Food',
              value: 231,
            },
            {
              name: 'Gas',
              value: 56,
            },
            {
              name: 'Car',
              value: 17,
            },
            {
              name: 'Savings',
              value: 760
            }
          ]
        }
      ]
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  renderHeader = (item) => {
    const { expended} = this.state
    return (
      <View style={styles.accordionHeader}>
        <Text style={{fontWeight: 'bold'}}>{item.month}</Text>
        <Icon 
          type = "AntDesign" 
          name = { expended === item.id ? 'upcircle' : 'downcircle' }
          style={{color: expended === item.id ? '#F6483B' : 'black'}}
        />
      </View>
    )
  }

  renderContent = (item) => {
    return (
      <View style={styles.accordionItems}>
        {item.expenses.map(m => {
          return (
            <View style={styles.accordionItemValue}>
              <Text style={styles.accordionItemValueName}>{m.name}</Text>
              <Text style={styles.accordionItemValueBadge}>+{m.value}$</Text>
            </View>
          )
        })}
        
      </View>
    )
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    

    return (
      <View style={styles.container}>
        <View style={styles.accordion}>
          <Text style={styles.accordionTitle}>Expenses</Text>
          <Accordion 
            style={styles.accordionItems}
            dataArray={this.state.data}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            onAccordionOpen={(item) => this.setState({expended: item.id})}
            onAccordionClose={(item) => this.setState({expended: 0})}
          />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:20,
    backgroundColor: '#F6483B'
  },
  accordion:{
    width: '90%',
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    padding:20,
    justifyContent: 'center'
  },
  accordionHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding:10,    

  },
  accordionTitle: {
    fontSize: 20, 
    fontWeight:'bold',
    marginBottom: 20,
    color: '#62625A'
  },
  accordionItems: {
    borderRadius: 5,
    backgroundColor:'white',

  },
  accordionItemValue:{
    flexDirection: 'row',
    justifyContent:"space-between",
    padding: 10,

  },
  accordionItemValueBadge: {
    color: '#42C382',
    padding: 5,
    fontWeight: 'bold'
  },
  accordionItemValueName: {
    color: '#62625A'
  }
})
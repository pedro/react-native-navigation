import React, {
  Component,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class PushedScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, padding: 20}}>

        <TouchableOpacity onPress={ this.onPushPress.bind(this) }>
          <Text style={styles.button}>Push Plain Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPushStyledPress.bind(this) }>
          <Text style={styles.button}>Push Styled Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPopPress.bind(this) }>
          <Text style={styles.button}>Pop Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPopToRootPress.bind(this) }>
          <Text style={styles.button}>Pop To Root</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onResetToPress.bind(this) }>
          <Text style={styles.button}>Reset To</Text>
        </TouchableOpacity>

      </View>
    );
  }
  onPushPress() {
    this.props.navigator.push({
      title: "More",
      screen: "example.PushedScreen"
    });
  }
  onPushStyledPress() {
    this.props.navigator.push({
      title: "More",
      screen: "example.StyledScreen"
    });
  }
  onPopPress() {
    this.props.navigator.pop();
  }
  onPopToRootPress() {
    this.props.navigator.popToRoot();
  }
  onResetToPress() {
    this.props.navigator.resetTo({
      title: "New Root",
      screen: "example.PushedScreen"
    });
  }
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  }
});

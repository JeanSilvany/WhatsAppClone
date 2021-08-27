import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  mainText: {
    color: '#f5f5f5',
    fontSize: 40,
    fontWeight: 'bold',
  },
  icon: {
    height: 45,
    padding: 10,
    backgroundColor: '#1D1D1F',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 45,
    flex: 1,
    padding: 4,
    backgroundColor: '#1D1D1F',
    color: '#f0f0f0',
    fontSize: 16,
    marginVertical: 20,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listText: {
    color: '#29A4EB',
    fontSize: 20,
  },
});

export default styles;

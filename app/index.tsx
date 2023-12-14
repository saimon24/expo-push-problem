import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';
const Page = () => {
  return (
    <View>
      <Text>Index</Text>
      <Link href={`/1`} asChild>
        <Button title="Open ID 1" />
      </Link>
    </View>
  );
};
export default Page;

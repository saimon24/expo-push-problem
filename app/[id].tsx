import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, Button } from 'react-native';
const Page = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>id page: {id}</Text>
      <Link href={`/${+id + 1}`} asChild>
        <Button title="Next id page" />
      </Link>
    </View>
  );
};
export default Page;

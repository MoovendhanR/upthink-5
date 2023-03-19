import './App.css';
import data from './utils/data.json'
import { Heading, VStack } from '@chakra-ui/react'
import TableComp from './Components/TableComp';

function App() {
  return (
    <div className="App">
      <VStack
        w='80%'
        m='auto'
        spacing={2}
        mt='20px'
        alignItems='flex-start'
      >
        <Heading>Manage Users</Heading>
        <TableComp data={data}/>
      </VStack>
    </div>
  );
}

export default App;

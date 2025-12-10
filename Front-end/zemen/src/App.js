import Button from './Button'
import Card from './Card';


function App() {
  return <div>
    <h1>hello from app.js</h1>
    <Button name='register' />
    <Button name='submit' />
    <div style={{'display':'flex'}}>
    <Card
      img="https://images.unsplash.com/photo-1474511320723-9a56873867b5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww"
      title="Fox"
      descriptions="Foxes are small-to-medium-sized omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull; upright, triangular ears."
    />
    <Card
      img="https://ids.si.edu/ids/deliveryService?id=NZP-20140817-6602RG-000003&max_w=550"
      title="Cheetah"
      descriptions="The cheetah (Acinonyx jubatus) is a large cat and the fastest land animal. It has a tawny to creamy white or pale buff fur that is marked with evenly spaced."
    />
    <Card
      img="https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_1280.jpg"
      title="Elephant"
      descriptions="Elephants are the largest living land animals. Three living species are currently recognised: the African bush elephant (Loxodonta africana)."
    />
    </div>
  </div>
}

export default App;

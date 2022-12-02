
import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from "reactstrap";

const data=[
  {id:1,personaje:"Naruto",anime:"Naruto"},
  {id:2,personaje:"Goku",anime:"Dragon Ball"},
  {id:3,personaje:"Kenshin Himura",anime:"Rurouni Kenshin"},
  {id:4,personaje:"Monkey D. Luffy", anime:"One Piece"},
  {id:5,personaje:"Edward Elric",anime:"Fullmetal ALchemist: Brotherhood"},
  {id:6,personaje:"Seto Kaiba",anime:"Yu-Gi-oh"}
]

class App extends React.Component {
  state={
    data:data
  }
render(){
  
  return (
    <>
    <Container>
       <br/>
    <Button color="success">Insertar Nuevo Personaje</Button>
      <br/><br/>

      <Table>
          <tr><th>Id <hr/></th>
            <th>Personaje <hr/></th>
            <th>Anime <hr/></th>
            <th>Acciones <hr/></th>
            </tr>
           

        <tbody>
          {this.state.data.map((elemento)=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.personaje}</td>
              <td>{elemento.anime}</td>
              <td><Button color="primary">Editar</Button>{"  "}
              <Button color="danger">Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>

    <Modal>
      <ModalHeader>
        <div>
          <h3>Insertar Registro</h3>
        </div>
      </ModalHeader>

      <ModalBody>
      <FormGroup>
          <label>Id:</label>
          <input className='form-control' readOnly type="text" value={this.state.data.length+1}/>
        </FormGroup>

        <FormGroup>
          <label>Personaje:</label>
          <input className='form-control' name="personaje" type="text"/>
        </FormGroup>

        <FormGroup>
          <label>Anime:</label>
          <input className='form-control' name="anime" type="text"/>
        </FormGroup>
        </ModalBody>      

        <ModalFooter>
          <Button color="primary">Insertar</Button>
          <Button color="danger">Cancelar</Button>
        </ModalFooter>

    </Modal>

    </>
  )
  }
}

export default App

import React, { Component } from 'react';
import { Collapse } from 'bootstrap';
import axios from 'axios';
import { Door } from './Door';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { doors: []};
  }

    async componentDidMount() {
        const doors = await axios('api/doors');
        this.setState({ doors: doors.data })
        
    }
    handleOpenClose = (Id) => {
        const doors = [...this.state.doors];
        console.log(doors,Id)
        const index = doors.findIndex((x) => x.id == Id);
        console.log(index);
        doors[index].isOpen = !doors[index].isOpen;
        if (doors[index].IsOpen && doors[index].IsLocked)
            doors[index].isLocked = false;
        this.setState({ doors: doors });
    };

    handleLock = ({ Id }) => {
        const doors = [...this.state.doors];
        const index = doors.findIndex((x) => x.Id == Id);
        doors[index].isLocked = !doors[index].isLocked;
        this.setState({ doors: doors });
    };

    handleNewDoor = async () => {
        //Call API to Insert the new door
        //update the state


        const door = {
            name: "",
            isLocked: false,
            isOpen: true,
        };
        const doors = [...this.state.doors];
        const doorData = await axios.post('api/doors', door)
        doors.push(doorData)
        this.setState({ doors: doors });
    };

    handleRemoveDoor = () => {
        //Call API to remove the new door
        //update the state
    };

    handleChange = (name, { Id }) => {
        const doors = [...this.state.doors];
        const index = doors.findIndex((x) => x.Id == Id);
        doors[index].Name = name;
        this.setState({ doors: doors });
    };

  render() {
    return (
        <div className="container">
            <button className="btn btn-primary m-2" onClick={this.handleNewDoor}>
                Add New Door
        </button>
            {this.state.doors.map((door) => (
                <Door
                    key={door.Id}
                    Id={door.Id}
                    Name={door.Name}
                    IsLocked={door.isLocked}
                    IsOpen={door.isOpen}
                    HandleOpenClose={this.handleOpenClose}
                    OnHandleLock={this.handleLock}
                    HandleRemove={this.handleRemoveDoor}
                    onChange={this.handleChange}
                />
            ))}
        </div>
    );
  }
}

import React from 'react'
import {observer, inject} from 'mobx-react'
import ItemList from '../components/ItemList'

@inject('itemStore') @observer
class Login extends React.Component {
    async componentDidMount() {
        await this.props.itemStore.getItems()
    }

    // getItems = async () => {
    //     await this.props.itemStore.getItems()
    // }
    // getItemById = async (id) => {
    //     await this.props.itemStore.getItemById(id)
    // }

    render() {
        console.log('props : ', this.props);
        console.log('Loading props : ', this.props.isLoading);
        const {itemStore} = this.props
        console.log('itemStore : ', itemStore.items);
        //add loading and failure state
        if (this.props.itemStore.isLoading) {
            return <span>Loading...</span>
        }

        if (this.props.itemStore.isFailure) {
            return <span>Error loading users!</span>
        }

        return <div>
            {itemStore.items && <ItemList
                items={itemStore.items}
                getItemById={this.getItemById.bind(this)}
                item={itemStore.item}
            />}
        </div>;
    }
}

export default Login

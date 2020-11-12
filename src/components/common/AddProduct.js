import React, { Component } from 'react';
import $ from "jquery";
import { connect } from 'react-redux';
import { addData } from '../../redux/Action'

class AddProduct extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            Name: '',
            Description: '',
            Price:'',
            Quantity:'',
            Image:''
        }
    }

    closeModal() {
        $('#addProduct').modal('hide');
        this.setState({
            Name: '',
            Description: '',
            Price:'',
            Quantity:'',
            Image:''
        })
    }
    setValue(e) {
        var value = e.target.value;
        var name = e.target.name;
        this.setState({ [name]: value })
    }
    addProduct(){
        if(this.state.Name==="")
        {
            alert('Name can not be left blank.')
            return
        }
        let note={
            name: this.state.Name,
            description: this.state.Description,
            price:this.state.Price,
            quantity:this.state.Quantity,
            image:this.state.Image
        }
        this.props.addData(note);
        this.closeModal()
    }
    render() {
        return (
            <div className="modal fade custommodal" id="addProduct" data-backdrop="static" tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center">
                            <h5 className="modal-title" id="exampleModalCenterTitle">{"Add Note"}</h5>
                            <button type="button" onClick={() => { this.closeModal() }} className="close" aria-label="Close">
                                <span aria-hidden="true"><i>&times;</i></span>
                            </button>
                        </div>
                        <div className="modal-body custommodalbodyone">
                            <div id="addDeviceTypeMsg"></div>
                            <form className="form-animate-fields">
                                <div className="form-group">
                                    <label className="form-control-placeholder">Name</label>
                                    <input type="text" name="Name" className="formValidate form-control"  data-type="title" value={this.state.Name} onChange={(e) => this.setValue(e)} />
                                </div>
                                {/* <div className="form-group">
                                    <input type="text" name="deviceModel" className="formValidate form-control" id="deviceModel"  onChange={(e) => this.setValue(e)} />
                                    <label className="form-control-placeholder">Model</label>
                                </div> */}
                                <label className="form-control-placeholder">Description</label>
                                <textarea name="Description" className="formValidate form-control" id='comment' data-type='comment' onChange={(e) => { this.setValue(e) }} value={this.state.Description} rows="2"
                                ></textarea>
                                <div className="form-group">
                                    <label className="form-control-placeholder">Price</label>
                                    <input type="number" name="Price" className="formValidate form-control"  data-type="title" value={this.state.Price} onChange={(e) => this.setValue(e)} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-placeholder">Quantity</label>
                                    <input type="number" name="Quantity" className="formValidate form-control"  data-type="title" value={this.state.Quantity} onChange={(e) => this.setValue(e)} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-placeholder">Image URL</label>
                                    <input type="text" name="Image" className="formValidate form-control"  data-type="title" value={this.state.Image} onChange={(e) => this.setValue(e)} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <button type="button" className="btn btn-success" onClick={() => { this.addProduct() }}>Save</button>
                            <button type="button" className="btn btn-danger" onClick={() => { this.closeModal() }} data-dismiss="modal">Discard</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state=>({
    // date:state.projectReducer.date
})
export default connect(mapStateToProps, {addData})(AddProduct)

import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin/LayoutAdmin'
import {useDispatch,useSelector} from 'react-redux';
import { Modal, Button } from 'antd';
// import { toastWarning } from 'Helper/toastHelper';
import { getListCategories,addNewCategory,editCategories ,DeleteCategory} from '../../state/actions';
// import { addCategoriesDemo } from '../../Services/fakeData';
import { toastWarning } from '../../Helper/toastHelper';
import './CatetgoriesAdmin.scss';

function CatetgoriesAdmin() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.categories.data);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [isModalVisible3, setIsModalVisible3] = useState(false);
    const [categoryValue, setCategoryValue] = useState({
      id: '',
      name: '',
    //   description: ''
    })
    const showModal = (id, name) => {
        setCategoryValue({ id, name })
        setIsModalVisible(true);
      };
      const showModal2 = () => {
        setCategoryValue({ id: '', name: '' })
        setIsModalVisible2(true);
      };
      const showModal3 = (id,name) => {
        setCategoryValue({ ...categoryValue,id, name })
        setIsModalVisible3(true);
      };
    
      const handleOk = () => {
        dispatch(editCategories(categoryValue))
        setIsModalVisible(false);
      };
      const handleOk2 = () => {
        if (categoryValue.name !== '') {
          dispatch(addNewCategory({ name: categoryValue.name }))
          setIsModalVisible2(false);
        }
        else  toastWarning('Vui lòng nhập đủ 2 trường!!!!')
    
      };
      const handleOk3 = () => {
          dispatch(DeleteCategory(categoryValue.id));
          setIsModalVisible3(false)
      }
    
      const handleCancel = () => {
        setIsModalVisible(false);
        setIsModalVisible2(false);
        setIsModalVisible3(false);
      };
    
      useEffect(() => {
        let mounted = true;
        if (mounted) {
          dispatch(getListCategories())
        }
        return () => mounted = false;
      }, []);
    return (
        <LayoutAdmin>
               <h2 className="categories-title">Categories ---- item</h2>
      <div className="table-categories">
        <Button onClick={showModal2} type="primary" className="btn-add">Add new category</Button>
        <ul className="header-table list-table">
          <li className="id-tb">id</li>
          <li className="name-tb">name</li>
          {/* <li className="desc-tb">description</li> */}
          {/* <li className="cre-tb">createdAt</li> */}
          <li className="edit-tb">Edit</li>
          <li className="delete-tb">Delete</li>
        </ul>
        {data?.map(item => (<ul className="list-table">
          <li className="id-tb">{item.id}</li>
          <li className="name-tb">{item.name}</li>
          {/* <li className="desc-tb">{item.description}</li> */}
          {/* <li className="cre-tb">{item.createdAt}</li> */}
          <li className="edit-tb" > <span onClick={() => showModal(item.id, item.name)}><i class="fa fa-edit"></i></span></li>
          <li className="delete-tb"> <span onClick={() => showModal3(item.id,item.name)}><i class="fa fa-trash"></i></span></li>
     
         </ul>))}
      </div>
      <Modal title="Change Category" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <input type="text" value={categoryValue.name} onChange={(e) => setCategoryValue({ ...categoryValue, name: e.target.value })} placeholder="Name category" />
        {/* <input type="text" value={categoryValue.description} onChange={(e) => setCategoryValue({ ...categoryValue, description: e.target.value })} placeholder="Description category" /> */}
      </Modal>
      <Modal title="Add new Category" visible={isModalVisible2} onOk={handleOk2} onCancel={handleCancel}>
        <input type="text" value={categoryValue.name} onChange={(e) => setCategoryValue({ ...categoryValue, name: e.target.value })} placeholder="Name category" />
        {/* <input type="text" value={categoryValue.description} onChange={(e) => setCategoryValue({ ...categoryValue, description: e.target.value })} placeholder="Description category" /> */}
      </Modal>
      <Modal title="Delete category" visible={isModalVisible3} onOk={handleOk3} onCancel={handleCancel}>
        Do you want delete ?
            </Modal>
        </LayoutAdmin>
    )
}

export default CatetgoriesAdmin

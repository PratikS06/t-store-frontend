const { API } = require("../../backend");

export const createCategory =(userId,token,category)=>{
    return fetch(`${API}/category/create/${userId}`,{
        method:"POST",
        headers:{
        Accept:"Application/json",
        "Content-Type":"Application/json",
        Authorization:`Bearer ${token}`,
        
        },
        body: JSON.stringify(category)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
} 

export const createProduct =(userId,token,product)=>{
    return fetch(`${API}/product/create/${userId}`,{
        method:"POST",
        headers:{
        Accept:"Application/json",
        Authorization:`Bearer ${token}`,
        },
        body: product
    }).then(response=>{
        return response.json()
    })
    
    .catch(err=>console.log(err))
}


//get categories

export const getCategories = () => {
    return fetch(`${API}/categories`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

//get Product All Products

export const getProducts =()=>{
    return fetch(`${API}/products`,{
        method:"GET"
    }).then(response=>{
        return response.json()
    }).catch(err=>console.log(err))
}


//Get Single Product

export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  

//Update Product

export const updateProduct =(productId,userId,token,product)=>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"PUT",
        headers:{
        Accept:"Application/json",
        Authorization:`Bearer ${token}`,
        },
        body: product
    }).then(response=>{
        return response.json()
    })
    
    .catch(err=>console.log(err))
}

// Delete Product

export const deleteProduct =(productId,userId,token)=>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"DELETE",
        headers:{
        Accept:"Application/json",
        Authorization:`Bearer ${token}`
        }
        
    }).then(response=>{
        return response.json()
    }).catch(err=>console.log(err))
    
}

//Assignment Part for Categories

// get Single Category
export const getCategory = categoryId => {
    return fetch(`${API}/category/${categoryId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};

// delete Category

export const deleteCategory =(categoryId,userId,token)=>{
    return fetch(`${API}/category/${categoryId}/${userId}`,{
        method:"DELETE",
        headers:{
        Accept:"Application/json",
        Authorization:`Bearer ${token}`
        }
        
    }).then(response=>{
        return response.json()
    }).catch(err=>console.log(err))
    
}

//update Categories

export const updateCategory =(categoryId,userId,token,category)=>{
    return fetch(`${API}/category/${categoryId}/${userId}`,{
        method:"PUT",
        Accept:"Application/json",
        headers:{
            "Content-Type":"Application/json",
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then(response=>{
        return response.json()
    })
    
    .catch(err=>console.log(err))
}

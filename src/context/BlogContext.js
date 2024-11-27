import React, {useState, useReducer} from "react";
import createDataContext from './createDataContext';

const BlogContext = React.createContext();

const blogReduceer = (state, action) => {
    switch (action.type)
    {
        case 'edit_blogpost':
            return state.map((entry) => {
                return entry.id === action.payload.id ? action.payload : entry;
            });
        case "add_blogpost":
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title :  action.payload.title,
                content: action.payload.content
            }];
        case "delete_blogpost":
            return state.filter((blogpost) => blogpost.id !== action.payload);
        default:
            return state;
    }
}


const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: "add_blogpost", payload: {title, content} });
        if (callback)
        {
            callback();
        }
    }
}

const deleteBlogPost = dispatch => {
    return id => {
        dispatch({ type: 'delete_blogpost', payload: id})
    }
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({
            type: 'edit_blogpost',
            payload: {id, title, content}
        });
        if (callback)
        {
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(
    blogReduceer,
    { addBlogPost, deleteBlogPost, editBlogPost }, 
    []
) 

export default BlogContext;
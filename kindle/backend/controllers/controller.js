const Model = require('../model/MainModel')
const passport = require("passport");
const getAllBooks = async (req, res,next) => {
    let books;
    const {q} = req.query;
    try{
        books = await Model.book.find();
        
    }catch(e){
        console.log(e);
    }
   
    if(!books){
        return res.status(404).json({message:"No books available"});
    }
    
    return res.status(200).json({books})
}

const getAllUsers = async (req, res,next) => {
    let users;
    try{
        users = await Model.user.find();
    }catch(e){
        console.log(e);
    }
    if(!users){
        return res.status(404).json({message:"No User available"});
    }
    return res.status(200).json({users})
}
const searchByName = async (req, res,next) => {
    console.log(req.query);
    let books;
    try{
        const query = { $or: [{name: {$regex:req.query.q,$options:"$i"}},{author:{$regex:req.query.q,$options:"$i"}}]};
        books = await Model.book.find(query);
    }
    catch(e)
    {
        console.log(e)
    }
    if(!books){
        return res.status(404).json({message:"No result found"});
    }
    return res.json({books})
}

const addUser = async (req, res,next) => {
    let user;
    const {name,password,readingList} = req.body
    try{
        user = new Model.user({
            name,
            password,
            readingList
        });
        await user.save();
    }
    catch(e)
    {
        console.log(e);
    }
    if ( ! user )
    {
        return res.status(500).json({message:"Unable to add user"});

    }
    return res.status(201).json({user});
}
const addBook = async (req, res,next) => {
    let book;
    const {name,author,description,price,image,rating,available} = req.body
    try{
        book = new Model.book({
            name,
            author,
            description,
            price,
            image,
            rating,
            available
        });
        await book.save();
    }
    catch(e)
    {
        console.log(e);
    }
    if ( ! book )
    {
        return res.status(500).json({message:"Unable to add book"});

    }
    return res.status(201).json({book});
}
const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try{
        book = await Model.book.findById(id);
    }
    catch(e)
    {
        console.log(e)
    }
    if ( ! book )
    {
        return res.status(500).json({message:"No book found"});

    }
    return res.status(201).json({book});

}
const getByName = async (req, res, next) => {
    console.log(req.params)
    let book;
    try{
        book = await Model.book.findOne({"name":String(req.params.body)})
    }
    catch(e)
    {
        console.log(e)
    }
    if ( ! book )
    {
        return res.status(500).json({message:"Unable to find the book name"});

    }
    return res.status(201).json({book});

}
const updateBook = async (req, res,next) =>{
    const id = req.params.id;
    const {name,author,description,price,image,rating,available} = req.body;
    let book;
    try{
        book = await Model.book.findByIdAndUpdate(id,{name,author,description,price,image,rating,available});
        book =await book.save();
    }
    catch(e){
        console.log(e);
    }
    if (!book)
    {
        return res.status(404).json({message:"Unable to update book"});

    }
    return res.status(200).json({book}); 

}
const deleteBook = async(req, res, next) =>{
    const id = req.params.id;
    let book;
    try{
        book = await Model.book.findByIdAndRemove(id);
    }
    catch(e){
        console.log(e);
    }
    if (!book)
    {
        return res.status(404).json({message:"Unable to delete book"});

    }
    return res.status(200).json({message:"Book is successfully deleted"}); 

}
const loginSuccess = (req, res) =>{
    console.log(req.user);
    if(req.user){
        res.status(200).json({
            error:false,
            message:"Successfully logged in",
            user:req.user
        })
    }
    else{
        res.status(403).json({
            error:true,
            message:"Not Authorized"
        });
    }
}
const loginFailed = async (req, res) =>{
    res.status(404).json({
        error:true,
        message: 'login failure'
    });
}
const login = async(req,res) => {
    try{
        console.log("Welcome")
        passport.authenticate("google",{
            successRedirect:"http://localhost:3000/",
            failureRedirect:"/auth/login/failed",
        })
   
    }
    catch(err){
        console.log(err);
    }
}

const logout = async(req,res) => {
    req.logout();
    req.redirect( "http://localhost:3000/");
}

const google = async(req,res) => {
    passport.authenticate("google",{ scope: ["profile"] })
}
const deleteUser = async(req, res, next) =>{
    const id = req.params.id;
    let user;
    try{
        user = await Model.user.findByIdAndRemove(id);
    }
    catch(e){
        console.log(e);
    }
    if (!user)
    {
        return res.status(404).json({message:"Unable to delete user"});

    }
    return res.status(200).json({message:"User is successfully deleted"}); 

}
exports.getAllBooks = getAllBooks;
exports.addBook= addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
exports.getByName = getByName;
exports.getAllUsers = getAllUsers;
exports.addUser=addUser;
exports.searchByName=searchByName;
exports.login = login;
exports.loginFailed = loginFailed;
exports.loginSuccess = loginSuccess;
exports.logout = logout;
exports.google = google;
exports.deleteUser = deleteUser;
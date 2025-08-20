import jwt from "jsonwebtoken";
const { TokenExpiredError } = jwt;

export const generateToken=(userId, res)=>{

    const Token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:"7d"
    })

    res.cookie("jwt",Token, {
        maxAge: 7*24*60*60*1000, //MS
        httpOnly: true, // prevent XSS attacks
        sameSite: "strict", // CSRF attacks
        secure: process.env.NODE_ENV !== "development"
    })

    return Token
};
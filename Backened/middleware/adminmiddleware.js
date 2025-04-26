export const isAdmin=(req,res,next)=>{
 if(req.body.role!="admin"){
    return res.status(403).json({ message: "Access Denied! Admin only." });
 }
 next(); // next middleware ba route chalo
}
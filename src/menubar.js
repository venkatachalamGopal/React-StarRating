import{AiOutlineShoppingCart}from 'react-icons/ai'
function Menubar(){

    return(
        <div className="MenuBar" >
            <div className="logo">
            Logo
            </div>

            <div>
         
            </div>

            <div className="cart">
                cart <span><AiOutlineShoppingCart className='carticon'/></span>
            </div>

        </div>
    );
}
export default Menubar;
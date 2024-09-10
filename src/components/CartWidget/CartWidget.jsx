import { IoMdCart } from "react-icons/io";

const CartWidget = () => {

    return(
        <div style={{display: 'flex', marginRight:"20px",alignItems: 'center',width:"40px",justifyContent:'space-between'}}>
<IoMdCart size={30}/>
2
        </div>
    );
};

export default CartWidget;
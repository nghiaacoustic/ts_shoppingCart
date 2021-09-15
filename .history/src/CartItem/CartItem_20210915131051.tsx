import Button from '@material-ui/core/Button'

import { CartItemType } from '../App'

import { Wrapper } from './CartItem.styles'

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void
}

const CartItem: React.FC = () => <div>Cart Item</div>

export default CartItem;
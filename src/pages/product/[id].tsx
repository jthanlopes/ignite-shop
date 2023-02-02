import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camise X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eligendi magni excepturi distinctio quidem, quos nostrum hic doloremque totam temporibus tenetur deserunt? Sint corrupti cupiditate minima consequuntur deserunt explicabo, velit minus harum facilis magnam modi molestias non! Numquam temporibus vero reiciendis, libero repudiandae aspernatur nisi molestiae quasi architecto tenetur suscipit.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}
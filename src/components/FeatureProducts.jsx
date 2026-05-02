
import SectionTitle from './SectionTitle'
import ProductsGrid from './ProductsGrid'

const FeatureProducts = () => {
  return (
    <div className='mt-20'>
        <SectionTitle text={`Featured Products`}/>
        <ProductsGrid/>
    </div>
  )
}

export default FeatureProducts
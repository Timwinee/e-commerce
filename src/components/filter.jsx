import { Form , Link, useLoaderData} from "react-router-dom"
import FormInput from "./formInput"
import FormSelect from './FormSelect'
import FormRange from "./FormRange"
import FormCheckbox from "./FormCheckbox"

const Filter = () => {
  const {meta} = useLoaderData()
  
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput type={'search'} label={'Search Product'} name={'search'} size={`input-sm`}/>
      {/* Category */}
      <FormSelect label={`Select Category`}  name={`category`} list={meta.categories} size={`select-sm`}/>
      {/* company */}
      <FormSelect name={`company`} label={`Select company`} list={meta.companies} size={`select-sm`}/>
      {/* Sort */}
      <FormSelect label={`sort by`} name={`order`} list={['a-z', 'z-a', 'high', 'low']} size={`select-sm`}/>
      {/* Range */}
      <FormRange label={`select price`} name={`price`} size={`range-sm`}/>
      {/* shipping */}
     < FormCheckbox name={`shipping`} size={`checkbox-sm`} defaultValue={false} label={'Free shipping'}/>
      {/* Buttons */}
      <button type="submit" className="btn btn-primary btn-sm  font-bold">SEARCH</button>
      <Link to={'/products'} className="btn btn-secondary btn-sm font-bold">RESET</Link>
    </Form>
  )
}

export default Filter
import { render ,screen} from "@testing-library/react"
import Loader from "."

describe('render Loader',()=>{
    test('test if loader is rendered',()=>{
        render(<Loader/>)
    })
})
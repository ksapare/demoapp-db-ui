import {render, screen, fireEvent, act} from '@testing-library/react'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import HomePage from "./homepage.component"


let mockAxios;
let fakeData = null;

beforeEach(() => {
    mockAxios = new MockAdapter(axios);

    fakeData = [
        {
            categoryId : 1,
            categoryName: "Appliances",
            categoryDescription: "Desc 1"
        },
        {
            categoryId : 2,
            categoryName: "Paint",
            categoryDescription: "Desc 1"
        },
        {
            categoryId : 3,
            categoryName: "Electrical",
            categoryDescription: "Desc 1"
        },

    ]
})


describe("Test that when an alphabet is entered in search box", () => {
    test("then filtered categories should be displayed", async () => {

        // Arrange
        mockAxios.onGet(`http://localhost:8080/v1/category/`).reply(200, fakeData)
        
        //Act
        await act (
            async () => {
                render (
                    <HomePage />

                )

            }
        )
        
        const searchBox = screen.getByRole("searchbox")
        fireEvent.change(searchBox, { target : {value : "p"}})

        const categoryElement = screen.getAllByRole("heading")

        //Assert
        expect(categoryElement).toHaveLength(2)
        expect(categoryElement[0]).toHaveTextContent("Appliances")
        
    
    })

})
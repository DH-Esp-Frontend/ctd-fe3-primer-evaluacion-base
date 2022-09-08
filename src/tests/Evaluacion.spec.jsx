import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../App"

describe("First exam Front III", ()=>{
    describe("App", ()=>{
        it("Should render without an error", ()=>{
            render(<App/>)
        })
    })
    describe("Form", ()=>{
        it("Should render at list two inputs", ()=>{
            render(<App/>)
            const inputs = screen.getAllByRole("textbox")
            expect(inputs.length).toBeGreaterThan(1)
        })

        describe('On error', () => {
            it("Should show an error message", async ()=>{
                render(<App/>)
                const inputs = screen.getAllByRole("textbox")
                const submitButton = screen.getByRole('button', {type: "submit"})
                userEvent.type(inputs[0], "Just testing")
                userEvent.type(inputs[1], "")
                userEvent.click(submitButton)

                const errorMessage = await screen.findByText("Please check your information again")
                expect(errorMessage).toBeInTheDocument()
            })
         })
        describe('On success', () => {
            it("Should render the card with the proper information", async ()=>{
                render(<App/>)
                const inputs = screen.getAllByRole("textbox")
                const submitButton = screen.getByRole('button', {type: "submit"})
                userEvent.type(inputs[0], "Just testing")
                userEvent.type(inputs[1], "Digital1234")
                userEvent.click(submitButton)

                const cardComponent = await screen.findByText("Just testing")
                expect(cardComponent).toBeInTheDocument() 
            })
         })
    })
})
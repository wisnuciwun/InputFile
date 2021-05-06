import React, { Component } from 'react'
import { Button } from 'reactstrap'

class InputFile extends Component {

    constructor(props) {
        super(props)

        this.inputFile = React.createRef()

    }

    onChangeInputFileReference = () => {
        this.inputFile.current.click()
    }

    onChangeFileHandler = () => {
        // type your command here
    }
    
    render() {
        return (
            <span>
                <input accept=".xlsx" style={{display: "none"}} ref={this.inputFile} onChange={this.onChangeFileHandler} type="file" />
                <Button style={{backgroundColor: "#FFC107"}} onClick={this.onChangeInputFileReference}><i class="fa fa-upload" aria-hidden="true"></i>&nbsp;&nbsp;Upload File</Button>
                &nbsp;&nbsp;
            </span>
        )
    }
}

export default InputFile

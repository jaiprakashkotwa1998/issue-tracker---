import React from 'react'
import {Container, Grid, Card, Icon} from "semantic-ui-react";

class ListFiles extends React.Component {

    renderFiles = files => {
        if(files.length <= 0) {
            return <Container style={{padding: 50}}>No files to Display</Container>
        }

        console.log(files)

        let fileListHolder = [];

        for (let file of files) {
            console.log(file)
            console.log(file.name)
            fileListHolder.push(
                <Card key={`file-list-${file.id}`} style={{padding: 10}}>
                    <Icon color="blue" floated="left" size="huge" name="file alternate"></Icon>
                    <Card.Content>
                        {file.name}
                    </Card.Content>
                </Card>
            )
        }

        return <Container style={{padding: 50}}>
            <Card.Group itemsPerRow={6}>
                {fileListHolder}
            </Card.Group>
        </Container>
    }

    render() {
        console.log(this.props)
        return <Container fluid>
            <h3>Recents</h3>
            <hr />

            <Grid.Column>
                {this.renderFiles(this.props.files)}
            </Grid.Column>

        </Container>
    }
}

export default ListFiles;
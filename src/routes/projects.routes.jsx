import Projects from '../components/projects/projects.component';
import client from '../apollo/apollo.client';
import {ApolloProvider} from "@apollo/client";

const projects = () => {
    return (
        <ApolloProvider client={client}>
            <div>
                <Projects/>
            </div>
        </ApolloProvider>
    )
}

export default projects;
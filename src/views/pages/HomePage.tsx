import { Component } from 'preact';
import Layout from '../components/layouts/Layout';

type HomePageProps = {

}

export default class HomePage extends Component<HomePageProps> {
    render(props?: HomePageProps) {
        return (
            <Layout title={'Home'}>
                <div>hello world</div>
            </Layout>
        );
    }
}

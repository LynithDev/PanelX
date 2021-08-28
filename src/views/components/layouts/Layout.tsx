import { Component } from 'preact';
import Navbar from '../components/Navbar';

type LayoutProps = {
    title: string,
}

export default class Layout extends Component<LayoutProps> {
    render(props: LayoutProps) {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <Navbar title={this.props.title} />
                    {this.props.children}
                </body>
            </html>
        );
    }
}

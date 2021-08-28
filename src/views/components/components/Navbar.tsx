import { Component } from 'preact';
import Home from 'mdi-preact/HomeIcon';
import config from '../../../config';

type NavbarProps = {
    title: string
}

export default class Navbar extends Component<NavbarProps> {
    render(props?: NavbarProps) {
        return (
            <header>
                <ul>
                    <li><Home /> {config.name} {config.version}</li>
                </ul>
            </header>
        );
    }
}

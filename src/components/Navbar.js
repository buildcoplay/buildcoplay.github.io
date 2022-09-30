import { Menubar } from 'primereact/menubar';

const items = [
    {
        label: 'Home',
    },
    {
        label: 'About',
        command:()=>{ window.location.hash="mission"; }
    },
    {
        label: 'Products',
        command:()=>{ window.location.hash="products"; }
    },
    {
        label: 'Contact Us',
        command:()=>{ window.location.hash="contact"; }
    },
    {
        label: 'Sign In',
        icon: 'pi pi-fw pi-power-off',
        url: 'https://friendzone.coplay.io/'
    }
];

function Navbar() {
    return (
        <div id='navbar' style={{display: 'flex', width: '100%'}}>
            <Menubar  style={{display: 'flex', width: '100%', fontWeight: 'bold'}} model={items}
                start={
                    <div>
                        <h2 style={{margin: 0, textAlign: 'left'}}>CoPlay</h2>
                    </div>
                }
            />
        </div>
    );
}

export default Navbar;
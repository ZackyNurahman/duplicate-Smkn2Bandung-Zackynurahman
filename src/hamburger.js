const HambugerMenu = ({open}) => {
    return ( 
        <div className={open?"flex flex-col w-[40vw] h-[100vh] bg-slate-900 absolute top-[5rem] right-0":"hidden"}>
            <h1>Test</h1>
        </div>
     );
}
 
export default HambugerMenu;
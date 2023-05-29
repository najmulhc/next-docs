export const metadata ={
    title: "Nested Route tester"
}

const NestedRouteRoot = ({children}: {children:React.ReactNode}) => {
 return (
    <html>
        <body>
            {children}
        </body>
    </html>
 )
}

export default NestedRouteRoot;
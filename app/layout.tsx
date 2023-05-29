import { Metadata } from "next"

export const metadata:Metadata = {
  title: "Static Meta Data", 
  description: "Some thing is better than nothing, tor shotiner ghoreer natin. 😀😀"
}

const RootLayout= ({children}:{children: React.ReactNode}) => {
   return (
    <html>
      <body>
        {children}
      </body>
    </html>
   )
}

export default RootLayout
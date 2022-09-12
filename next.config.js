/** @type {import('next').NextConfig} */
// const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const API_KEY = process.env.API_KEY;

// redirects : 실제로 URL이 변경 됨.
// rewrites : 실제 URL은 변경되지 않음.


const nextConfig = {
  async redirects(){
    return [
      {
        source : '/old-blog/:path*',
        destination : '/new-sexy-blog/:path*',
        permanent : false,
      }

    ]
  },


  async rewrites(){
    return [
      {
        source : '/api/movies',
        destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source : '/api/movies/:id',
        destination : `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  },
  reactStrictMode: true,
  swcMinify: true,

}

module.exports = nextConfig
  
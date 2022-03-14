import gql from 'apollo-boost';


const limit = 4

const LOAD_VIDEOS = (gql`
query($limit: Int) {
  allVideos(limit: $limit) {
    items {
      id
    }
  }
}`,
  {
    options: { 
      context: { 
        hazHeader: true
      }
    }
  })

  export {LOAD_VIDEOS};
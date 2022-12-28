import { useEffect, useState } from "react"
import './style/articles.css'
import { api } from '../constants'
import IButton from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function ArticlesPage() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getFetchArticles = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(api)
      if (response.ok) {
        const data = await response.json()
        setArticles(data)
      }    
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // fetch(api)
    //   .then(res => res.json())
    //   .then(data => setArticles(data))
    // console.log(articles)
    // getFetchArticles()
  }, [])

  return (
    <div className="articles">
      <h1>Articles</h1>
      <IButton
        variant="contained"
        onClick={getFetchArticles}
      >
        Get Api
      </IButton>
      { loading && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
      {!loading && articles.map(article => (
        <Card sx={{ maxWidth: 345 }} key={article.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={article.imageUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.summary}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      {error && <p style={{ color: 'red'}}>{error}</p>}
    </div>
  )
}
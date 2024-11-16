// import React from 'react';
// import { motion } from 'framer-motion';
// import Navbar from './Navbar';
// import Carousel from './Carousel';
// import ShopByRoom from './ShopByRoom';
// import PopularProducts from './PopularProducts';
// import HotDiscounts from './HotDiscounts';
// import Blog from './Blog';
// import Footer from './Footer';

// const Apps: React.FC = () => {
//   return (
//     <div>
//       {/* Navbar animatsiya */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }} // Boshlanish holati
//         animate={{ opacity: 1, y: 0 }} // Animatsiya tugagandan keyin
//         transition={{ duration: 0.8 }}
//       >
//         <Navbar />
//       </motion.div>

//       {/* Carousel animatsiya */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.2 }}
//       >
//         <Carousel />
//       </motion.div>

//       {/* ShopByRoom animatsiya - pastdan chiqish */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }} // faqat bir marta animatsiya qilish
//       >
//         <ShopByRoom />
//       </motion.div>

//       {/* PopularProducts animatsiya - pastdan chiqish */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         <PopularProducts />
//       </motion.div>

//       {/* HotDiscounts animatsiya - pastdan chiqish */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         <HotDiscounts />
//       </motion.div>

//       {/* Blog animatsiya - pastdan chiqish */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         <Blog />
//       </motion.div>

//       {/* Footer animatsiya - pastdan chiqish */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         <Footer />
//       </motion.div>
//     </div>
//   );
// };

// export default Apps;



import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';

interface MediaProps {
  loading?: boolean;
}

function Apps(props: MediaProps) {
  const { loading = false } = props;

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            'Ted'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            '5 hours ago'
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          alt="Nicola Sturgeon on a TED talk stage"
        />
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}>
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default function Facebook() {
  return (
    <div>
      <Apps loading />
      <Apps />
    </div>
  );
}



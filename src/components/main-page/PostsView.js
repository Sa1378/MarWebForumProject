import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles={
  cardContainer: {
    display:"flex",
    flexFlow:"row-reverse wrap",
  },
  card: {
    textAlign:"right",
    display:"flex",
    flexDirection:"column",
    width: 310,
    height:290,
    margin:"0px 30px 50px 30px",
  },
  grow: {
      flexGrow:2,
  },
  media: {
    display:"none",
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
      marginTop:"10px",
      marginLeft:"10px",
    backgroundColor: red[500],
  },
  liked: {
      color:"red",
  },
  notliked: {
      color:"black",
  },
  cardContent: {
      overflow:"hidden",
  }
};


class PostsView extends Component{

    render(){
    const {classes}=this.props;
    class Post extends Component{
        
        constructor(props) {
            super(props);
            this.state = {liked: false};
            this.likePost = this.likePost.bind(this);
        }
        likePost(){
            console.log(this.state);
            this.setState({liked:!this.state.liked});
            console.log(this.state);
        }

        render(){
        
        class LikeIcon extends Component {
            render(){
                const {classes,liked}=this.props;
                if(liked===true)
                {
                    return (
                        <FavoriteIcon className={classes.liked}/>
                    );
                }
                else{
                    return (
                        <FavoriteIcon className={classes.notliked}/>
                    );
                }
            }
        }


        const {classes,title,author,previewText}=this.props;
        return (
        <Card className={classes.card+" "+classes.preWrap}>
        <CardHeader
          avatar={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
          }
          action={
            <Avatar aria-label="recipe" className={classes.avatar}>
              M
            </Avatar>
            
          }
          title={title}
          titleTypographyProps={{variant:'h4' }}
          subheader={author}
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="body2" color="textSecondary" component="p">
              {previewText}
          </Typography>
        </CardContent>
        <div className={classes.grow}/>
        <CardActions disableSpacing>    
          <IconButton aria-label="like" onClick={this.likePost} >
              <LikeIcon classes={classes} liked={this.state.liked}/>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        </Card>
        )}
    };
    return (
      <div className={classes.cardContainer+" "+classes.preWrap}>
      <Post classes={classes} title="مهم نیست" author="مهرداد"  previewText="این متن چرت است"/>
      
      <Post classes={classes} title="چه شعری" author="مهرداد" previewText="ما در این شهر غریبیم و در این ملک فقیر

به کمند تو گرفتار و به دام تو اسیر

در آفاق گشاده‌ست ولیکن بسته‌ست

از سر زلف تو در پای دل ما زنجیر

من نظر بازگرفتن نتوانم همه عمر

از من ای خسرو خوبان تو نظر بازمگیر

گر چه در خیل تو بسیار به از ما باشد

ما تو را در همه عالم نشناسیم نظیر

در دلم بود که جان بر تو فشانم روزی

باز در خاطرم آمد که متاعیست حقیر

این حدیث از سر دردیست که من می‌گویم

تا بر آتش ننهی بوی نیاید ز عبیر

گر بگویم که مرا حال پریشانی نیست

رنگ رخسار خبر می‌دهد از سر ضمیر

عشق پیرانه سر از من عجبت می‌آید

چه جوانی تو که از دست ببردی دل پیر

من از این هر دو کمانخانه ابروی تو چشم

برنگیرم وگرم چشم بدوزند به تیر

عجب از عقل کسانی که مرا پند دهند

برو ای خواجه که عاشق نبود پندپذیر

سعدیا پیکر مطبوع برای نظر است

گر نبینی چه بود فایده چشم بصیر"/>
      
      <Post classes={classes} title="چه شعری" author="مهرداد"  previewText="دل برگرفتی از برم ای دوست دست گیر

کز دست می‌رود سرم ای دوست دست گیر

شرط است دستگیری درمندگان و من

هر روز ناتوان ترم ای دوست دست گیر

پایاب نیست بحر غمت را و من غریق

خواهم که سر برآورم ای دوست دست گیر

سر می‌نهم که پای برآرم ز دام عشق

وین کی شود میسرم ای دوست دست گیر

دل جان همی‌سپارد و فریاد می‌کند

کآخر به کار تو درم ای دوست دست گیر

راضی شدم به یک نظر اکنون که وصل نیست

آخر بدین محقرم ای دوست دست گیر

از دامن تو دست ندارم که دست نیست

بر دستگیر دیگرم ای دوست دست گیر

سعدی نه بارها به تو برداشت دست عجز

یک بارش از سر کرم ای دوست دست گیر"/>
      
      <Post classes={classes} title="چه علیکی" author="مهرداد" previewText="فتنه‌ام بر زلف و بالای تو ای بدر منیر

قامت است آن یا قیامت عنبر است آن یا عبیر

گم شدم در راه سودا رهنمایا ره نمای

شخصم از پای اندر آمد دستگیرا دست گیر

گر ز پیش خود برانی چون سگ از مسجد مرا

سر ز حکمت برندارم چون مرید از گفت پیر

ناوک فریاد من هر ساعت از مجرای دل

بگذرد از چرخ اطلس همچو سوزن از حریر

چون کنم کز دل شکیبایم ز دلبر ناشکیب

چون کنم کز جان گزیر است و ز جانان ناگزیر

بی تو گر در جنتم ناخوش شراب سلسبیل

با تو گر در دوزخم خرم هوای زمهریر

گر بپرد مرغ وصلت در هوای بخت من

وه که آن ساعت ز شادی چارپر گردم چو تیر

تا روانم هست خواهم راند نامت بر زبان

تا وجودم هست خواهم کند نقشت در ضمیر

گر نبارد فضل باران عنایت بر سرم

لابه بر گردون رسانم چون جهودان در فطیر

بوالعجب شوریده‌ام سهوم به رحمت درگذار

سهمگن درمانده‌ام جرمم به طاعت درپذیر

آه دردآلود سعدی گر ز گردون بگذرد

در تو کافردل نگیرد ای مسلمانان نفیر"/>

        <Post classes={classes} title="مهم نیست" author="مهرداد" previewText="این متن چرت است"/>
        <Post classes={classes} title="مهم نیست" author="مهرداد" previewText="این متن چرت است"/>
        <Post classes={classes} title="مهم نیست" author="مهرداد" previewText="این متن چرت است"/>
        <Post classes={classes} title="مهم نیست" author="مهرداد" previewText="این متن چرت است"/>
     </div>
  );
  }
}

export default withStyles(styles)(PostsView);
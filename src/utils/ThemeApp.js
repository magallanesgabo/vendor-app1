import { AppBar, Avatar, BottomNavigation, BottomNavigationAction, Card, ListItem, Paper } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ThemeApp = () => {

    const theme = useTheme();
    const CustomAppBar = styled(AppBar)(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.color,
    }));

    const CustomArrowBackIosIcon = styled(ArrowBackIosIcon)(({ theme }) => ({
        color: theme.palette.primary.main,
    }));

    const CustomCard = styled(Card)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
    }));


    const CustomAvatar = styled(Avatar)(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        '&.MuiListItemAvatar-alignItemsFlexStart': {
            backgroundColor: theme.palette.secondary.main,
        }
    }));

    const CustomListItem = styled(ListItem)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.color,
        padding: 5,
        paddingBottom: 10

    }));


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        padding: 2,
        textAlign: 'center',
        color: theme.palette.secondary.color,
        width: '100%',
    }));


    const CustomBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    '&.MuiBottomNavigation-root': {
        backgroundColor: theme.palette.secondary.main,
    },
    }));

    const CustomBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
        color: theme.palette.primary.color,
        padding: '0px !important'

    }));


  return {
    CustomAppBar,
    CustomArrowBackIosIcon,
    theme,
    CustomCard,
    CustomAvatar,
    CustomListItem,
    CustomBottomNavigation,
    CustomBottomNavigationAction,
    Item

  }
}

export default ThemeApp
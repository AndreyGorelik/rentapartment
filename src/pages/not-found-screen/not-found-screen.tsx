import {Link} from 'react-router-dom';

function NotFoundScreen() {
  return (
    <>
      <div>Нет такой страницы</div>
      <Link to='/'>Вернуться на главную</Link>
    </>
  );
}

export default NotFoundScreen;

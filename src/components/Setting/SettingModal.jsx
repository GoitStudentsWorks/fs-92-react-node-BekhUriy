import { useEffect, useState } from 'react';
import { CloseSvg } from './closeSvg';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BlockGender,
  BlockPassword,
  GeneralBlock,
  Input,
  InputTitle,
  PasswordLabel,
  SettingAndIcon,
  SettingTitle,
  WrapperSetting,
  Button,
  SaveButton,
  InputWrapper,
  StyledVisibilityOffIcon,
  StyledVisibilityOutIcon,
  Scrollbar,
} from './SettingModal.styled';
import { Backdrop } from '../Logout/UserLogoutModal.styled';

import { GenderBlock } from 'components/Setting/GenderBlock';
import { NameEmailBlock } from './NameEmailBlock';
import { UploadPhoto } from './UploadPhoto';

import { modalClose } from '../../redux/setingModalSlicer';
import {
  updateNameGenderThunk,
  updatePassworsThunk,
} from '../../redux/user/thunk';

import { useUser } from '../../hooks/useUser';
import { clearMessage } from '../../redux/user/slice';

export const SettingModal = () => {
  const dispatch = useDispatch();
  const { user, isLoading, message, isError } = useUser();

  const [updateData, setUpdateData] = useState({
    name: '',
    gender: '',
  });
  const [updatePass, setUpdatePass] = useState({
    oldPass: '',
    newPass: '',
    repeatNewPass: '',
  });
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [errStyle, setErrStyle] = useState(false);

  const getValue = (objValue) => {
    setUpdateData((prev) => ({
      ...prev,
      ...objValue,
    }));
  };

  const handleChangePass = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdatePass((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const HandleRepeatPass = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUpdatePass((prev) => {
      return { ...prev, [name]: value };
    });

    if (updatePass.newPass !== e.target.value) {
      setErrStyle(true);
    } else {
      setErrStyle(false);
    }
  };

  const togglePasswordVisibility = (setState) => {
    setState((prevState) => !prevState);
  };

  const handlCloseModalBack = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(modalClose());
    }
  };

  const handlCloseModal = (e) => {
    dispatch(modalClose());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (updateData.name !== user.name || updateData.gender !== user.gender) {
      dispatch(updateNameGenderThunk(updateData));
      return;
    }

    if (updatePass.oldPass.length > 0) {
      if (updatePass.oldPass && !updatePass.newPass) {
        toast.error('Please enter new password');
        return;
      } else if (!updatePass.oldPass && updatePass.newPass) {
        toast.error('Please enter old password');
        return;
      } else if (updatePass.newPass !== updatePass.repeatNewPass) {
        toast.error("Passwords don't match");
        return;
      } else if (
        updatePass.oldPass.length < 8 ||
        updatePass.newPass.length < 8 ||
        updatePass.repeatNewPass.length < 8
      ) {
        toast.error('Passwords must be length > 8');
      } else if (
        updatePass.oldPass &&
        updatePass.newPass &&
        updatePass.repeatNewPass
      ) {
        const result = await dispatch(
          updatePassworsThunk({
            password: updatePass.oldPass,
            newPassword: updatePass.newPass,
          })
        );
        if (!result.error) {
          handlCloseModal();
        }
        return;
      }
    }

    toast.info('Please make changes');
  };

  const notify = (message) => {
    if (isError) {
      toast.error(message, {
        position: 'bottom-right',
        autoClose: 3000,
        delay: 1000,
      });
    } else {
      toast.success(message, {
        position: 'bottom-right',
        autoClose: 3000,
        delay: 1000,
      });
    }
  };

  useEffect(() => {
    if (!isLoading && message) {
      notify(message);
    }

    return () => {
      dispatch(clearMessage());
    };
  }, [isError, message, isLoading]);

  useEffect(() => {
    const handleEscPress = (e) => {
      if (e.key === 'Escape') {
        dispatch(modalClose());
      }
    };
    document.addEventListener('keydown', handleEscPress);

    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [dispatch]);

  return (
    <>
      <Backdrop onClick={(e) => handlCloseModalBack(e)} />
      <Scrollbar>
        <WrapperSetting onSubmit={handleSubmit}>
          <SettingAndIcon>
            <SettingTitle>Setting</SettingTitle>
            <button
              style={{
                border: 'none',
                background: '#ffffff',
              }}
              onClick={handlCloseModal}
            >
              <CloseSvg />
            </button>
          </SettingAndIcon>
          <UploadPhoto user={user} />
          <GeneralBlock>
            <BlockGender>
              <GenderBlock getValue={getValue} />
              <NameEmailBlock getValue={getValue} />
            </BlockGender>
            <BlockPassword>
              <InputTitle>Password</InputTitle>
              <InputWrapper>
                <PasswordLabel htmlFor="oldPassword">
                  Outdated password:
                </PasswordLabel>
                <div style={{ position: 'relative' }}>
                  <Input
                    minLength={'8'}
                    type={showOldPassword ? 'text' : 'password'}
                    name="oldPass"
                    value={updatePass.oldPass}
                    placeholder="Password"
                    onChange={handleChangePass}
                    style={{ color: '#407bff' }}
                  />
                  {showOldPassword ? (
                    <StyledVisibilityOutIcon
                      onClick={() =>
                        togglePasswordVisibility(setShowOldPassword)
                      }
                    />
                  ) : (
                    <StyledVisibilityOffIcon
                      onClick={() =>
                        togglePasswordVisibility(setShowOldPassword)
                      }
                    />
                  )}
                </div>
              </InputWrapper>
              <InputWrapper>
                <PasswordLabel htmlFor="name">New password:</PasswordLabel>
                <div style={{ position: 'relative' }}>
                  <Input
                    minLength={'8'}
                    type={showNewPassword ? 'text' : 'password'}
                    name="newPass"
                    value={updatePass.newPass}
                    placeholder="Password"
                    onChange={handleChangePass}
                    style={{ color: '#407bff' }}
                  />
                  {showNewPassword ? (
                    <StyledVisibilityOutIcon
                      onClick={() =>
                        togglePasswordVisibility(setShowNewPassword)
                      }
                    />
                  ) : (
                    <StyledVisibilityOffIcon
                      onClick={() =>
                        togglePasswordVisibility(setShowNewPassword)
                      }
                    />
                  )}
                </div>
              </InputWrapper>
              <InputWrapper>
                <PasswordLabel htmlFor="name">
                  Repeat new password:
                </PasswordLabel>
                <div style={{ position: 'relative' }}>
                  <Input
                    errStyle={errStyle}
                    minLength={'8'}
                    type={showRepeatPassword ? 'text' : 'password'}
                    name="repeatNewPass"
                    value={updatePass.repeatNewPass}
                    placeholder="Password"
                    onChange={HandleRepeatPass}
                    style={{ color: '#407bff' }}
                  />
                  {showRepeatPassword ? (
                    <StyledVisibilityOutIcon
                      onClick={() =>
                        togglePasswordVisibility(setShowRepeatPassword)
                      }
                    />
                  ) : (
                    <StyledVisibilityOffIcon
                      onClick={() =>
                        togglePasswordVisibility(setShowRepeatPassword)
                      }
                    />
                  )}
                </div>
              </InputWrapper>
            </BlockPassword>
          </GeneralBlock>
          <Button>
            <SaveButton type="submit">
              {isLoading ? 'Loading...' : ' Save'}
            </SaveButton>
            <ToastContainer />
          </Button>
        </WrapperSetting>
      </Scrollbar>
    </>
  );
};

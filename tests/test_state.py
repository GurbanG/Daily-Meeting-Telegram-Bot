from bot.chat import ChatId
import bot.state as st
import pytest

@pytest.mark.asyncio
async def test_create_user():
    user = await st.create_user('John')
    assert user.username == 'John'
    assert user.is_joined == False
    assert user.meeting_days == {0,1,2,3,4}
    

from unittest.mock import AsyncMock
from bot.chat import ChatId
import bot.state as st
import pytest

class TestState:

    @pytest.mark.asyncio
    async def test_ChatUser(self):
        user = st.ChatUser()
        assert user.reminder_period == None
        assert user.non_replied_daily_msgs == {0,1,2}
        user.username = 'Bob'
        assert user.__hash__() == hash('Bob')
        
        user2 = st.ChatUser()
        user2.username = 'Bob'
        assert user.__eq__(user2) == True
    
    @pytest.mark.asyncio
    async def test_create_user(self):
        user = await st.create_user('John')
        assert user.username == 'John'
        assert user.is_joined == False
        assert user.meeting_days == {0,1,2,3,4}
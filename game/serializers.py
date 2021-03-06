from django.contrib.auth.models import User
from .models import Game, Cell, Shipyard
from rest_framework import serializers
 
 
class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id', 'username', 'groups')
 
 
class GameSerializer(serializers.ModelSerializer):
	class Meta:
		model = Game
		fields = ('id', 'p1', 'p2', 'num_cols', 
                  'num_rows', 'player_turn', 'p1_ship_count', 'p2_ship_count', 'max_ships', 'p1_ready', 'p2_ready', 'winner')
		depth = 1

		"""
class CellSerializer(serializers.ModelSerializer):
	class Meta:
		model = Cell
		fields = ('id', 'game', 'board_type', 'x', 'y', 'state')
		"""
		
class ShipyardSerializer(serializers.ModelSerializer):
	class Meta:
		model = Shipyard
		fields = ('id', 'length', 'name')	
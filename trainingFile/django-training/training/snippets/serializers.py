from rest_framework import serializers
from snippets import models


class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Snippet
        fields = ['id', 'title', 'code', 'linenos', 'language', 'style']
